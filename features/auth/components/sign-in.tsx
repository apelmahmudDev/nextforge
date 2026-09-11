"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

import { ApiError } from "@/lib/api/errors"
import {
  authKeys,
  currentUserQuery,
  login,
  logout,
} from "@/features/auth/data/queries"
import type { AuthUser } from "@/lib/auth/types"

function getErrorMessage(error: unknown) {
  if (error instanceof ApiError) {
    if (
      typeof error.body === "object" &&
      error.body !== null &&
      "message" in error.body &&
      typeof error.body.message === "string"
    ) {
      return error.body.message
    }

    return "The backend rejected this request."
  }

  return "Something went wrong. Please try again."
}

function initials(user: AuthUser) {
  return `${user.firstName[0] ?? ""}${user.lastName[0] ?? ""}`.toUpperCase()
}

function AuthenticatedUser({ user }: { user: AuthUser }) {
  const queryClient = useQueryClient()
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: authKeys.me() })
    },
  })

  return (
    <section className="w-full max-w-md border border-[#45433e] bg-[#f4f0e7] p-7 text-[#181817] shadow-[10px_10px_0_#d96f3e] sm:p-9">
      <div className="flex items-start justify-between gap-6 border-b border-[#c8c0b3] pb-6">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] text-[#a75230] uppercase">
            Authenticated session
          </p>
          <h1 className="mt-3 font-heading text-3xl font-bold tracking-tight">
            Welcome back.
          </h1>
        </div>
        <div className="flex size-12 items-center justify-center bg-[#1a5552] font-heading text-lg font-bold text-[#f4f0e7]">
          {initials(user)}
        </div>
      </div>

      <div className="py-7">
        <p className="text-sm text-[#6c675f]">Signed in as</p>
        <p className="mt-1 text-xl font-semibold">
          {user.firstName} {user.lastName}
        </p>
        <p className="mt-1 text-sm text-[#6c675f]">{user.email}</p>
      </div>

      <button
        className="w-full border border-[#45433e] px-4 py-3 text-sm font-semibold transition-colors hover:bg-[#e7dfd2] disabled:cursor-wait disabled:opacity-60"
        disabled={logoutMutation.isPending}
        onClick={() => logoutMutation.mutate()}
        type="button"
      >
        {logoutMutation.isPending ? "Signing out..." : "Sign out"}
      </button>
      {logoutMutation.isError && (
        <p className="mt-3 text-sm text-[#b43d2b]">
          {getErrorMessage(logoutMutation.error)}
        </p>
      )}
    </section>
  )
}

export function SignIn() {
  const queryClient = useQueryClient()
  const currentUser = useQuery(currentUserQuery())
  const [username, setUsername] = useState("emilys")
  const [password, setPassword] = useState("emilyspass")
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(authKeys.me(), user)
    },
  })

  if (currentUser.isPending) {
    return (
      <div className="flex min-h-[22rem] items-center justify-center text-sm text-[#b6b0a5]">
        Checking your session...
      </div>
    )
  }

  if (currentUser.data) {
    return <AuthenticatedUser user={currentUser.data} />
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    loginMutation.mutate({ username, password, expiresInMins: 30 })
  }

  return (
    <section className="w-full max-w-md border border-[#45433e] bg-[#f4f0e7] p-7 text-[#181817] shadow-[10px_10px_0_#d96f3e] sm:p-9">
      <div className="border-b border-[#c8c0b3] pb-7">
        <p className="font-mono text-[10px] tracking-[0.2em] text-[#a75230] uppercase">
          Secure access
        </p>
        <h1 className="mt-3 font-heading text-4xl font-bold tracking-tight">
          Sign in to your workspace.
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#6c675f]">
          Your session is protected by server-side httpOnly cookies.
        </p>
      </div>

      <form className="space-y-5 pt-7" onSubmit={handleSubmit}>
        <label className="block text-sm font-semibold" htmlFor="username">
          Username
          <input
            autoComplete="username"
            className="mt-2 h-11 w-full border border-[#aaa296] bg-[#fffdf8] px-3 text-sm transition-colors outline-none placeholder:text-[#aaa296] focus:border-[#1a5552] focus:ring-2 focus:ring-[#1a5552]/20"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your username"
            required
            value={username}
          />
        </label>

        <label className="block text-sm font-semibold" htmlFor="password">
          Password
          <input
            autoComplete="current-password"
            className="mt-2 h-11 w-full border border-[#aaa296] bg-[#fffdf8] px-3 text-sm transition-colors outline-none placeholder:text-[#aaa296] focus:border-[#1a5552] focus:ring-2 focus:ring-[#1a5552]/20"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter your password"
            required
            type="password"
            value={password}
          />
        </label>

        <button
          className="flex h-12 w-full items-center justify-center bg-[#1a5552] px-4 text-sm font-bold text-[#f4f0e7] transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
          disabled={loginMutation.isPending}
          type="submit"
        >
          {loginMutation.isPending ? "Signing you in..." : "Continue"}
          {!loginMutation.isPending && <span className="ml-2">-&gt;</span>}
        </button>

        {loginMutation.isError && (
          <p className="border-l-2 border-[#b43d2b] bg-[#f8ded7] px-3 py-2 text-sm text-[#8f2f22]">
            {getErrorMessage(loginMutation.error)}
          </p>
        )}
      </form>

      <div className="mt-7 border-t border-[#c8c0b3] pt-5 text-xs text-[#6c675f]">
        <span>Demo account</span>
        <button
          className="ml-2 font-semibold text-[#1a5552] underline underline-offset-4 hover:text-[#a75230]"
          onClick={() => {
            setUsername("emilys")
            setPassword("emilyspass")
          }}
          type="button"
        >
          Load credentials
        </button>
      </div>
    </section>
  )
}
