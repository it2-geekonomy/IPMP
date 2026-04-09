"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonClassName } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/text";
import { useAppSelector } from "@/store";

export function DashboardOverview() {
  const clients = useAppSelector((state) => state.clients.items);
  const tasks = useAppSelector((state) => state.tasks.items);
  const billing = useAppSelector((state) => state.billing.summary);
  const notifications = useAppSelector((state) => state.notifications.items);

  const completedTasks = tasks.filter((task) => task.completed).length;
  const openTasks = tasks.length - completedTasks;
  const netRevenue = billing.totalPaid - billing.totalDue;

  return (
    <div className="min-h-screen bg-zinc-100 px-6 py-8 text-zinc-900 sm:px-10">
      <main className="mx-auto w-full max-w-6xl space-y-6">
        <section className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <Badge variant="default">IPMP Workspace</Badge>
              <Typography as="h1" variant="h1" className="mt-3 font-semibold tracking-tight">
                Operations Dashboard
              </Typography>
              <Typography variant="body" className="mt-2 max-w-2xl text-zinc-600">
                Manage clients, tasks, compliance, billing, and team activity from one place.
              </Typography>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/clients" className={buttonClassName({ size: "lg" })}>
                New Client
              </Link>
              <Link
                href="/tasks"
                className={buttonClassName({ variant: "outline", size: "lg" })}
              >
                Create Task
              </Link>
              <Link
                href="/billing"
                className={buttonClassName({ variant: "outline", size: "lg" })}
              >
                Record Payment
              </Link>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-zinc-200 bg-white p-4 text-zinc-900">
            <CardHeader>
              <CardDescription>Active Clients</CardDescription>
              <CardTitle typography="display">{clients.length}</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="small" className="text-zinc-600">
                Active records in store
              </Typography>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white p-4 text-zinc-900">
            <CardHeader>
              <CardDescription>Open Tasks</CardDescription>
              <CardTitle typography="display">{openTasks}</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="small" className="text-zinc-600">
                {completedTasks} completed
              </Typography>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white p-4 text-zinc-900">
            <CardHeader>
              <CardDescription>Net Revenue</CardDescription>
              <CardTitle typography="display">${netRevenue.toLocaleString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="small" className="text-zinc-600">
                Paid ${billing.totalPaid.toLocaleString()} · Due ${billing.totalDue.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <Card className="border-zinc-200 bg-white p-4">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>System notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {notifications.length === 0 ? (
                <div className="rounded-md bg-zinc-50 px-3 py-2">
                  <Typography as="span" variant="small" className="text-zinc-600">
                    No notifications yet.
                  </Typography>
                </div>
              ) : (
                notifications
                  .slice(-4)
                  .reverse()
                  .map((event) => (
                    <div
                      key={event.id}
                      className="flex items-center justify-between rounded-md bg-zinc-50 px-3 py-2"
                    >
                      <Typography as="span" variant="small" className="text-zinc-700">
                        {event.message}
                      </Typography>
                      <Badge
                        variant={
                          event.type === "success"
                            ? "success"
                            : event.type === "warning"
                              ? "warning"
                              : event.type === "error"
                                ? "error"
                                : "default"
                        }
                      >
                        {event.type}
                      </Badge>
                    </div>
                  ))
              )}
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white p-4">
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
              <CardDescription>Module routes</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Link
                href="/clients"
                className={buttonClassName({ variant: "outline", className: "w-full justify-start" })}
              >
                Clients
              </Link>
              <Link
                href="/tasks"
                className={buttonClassName({ variant: "outline", className: "w-full justify-start" })}
              >
                Tasks
              </Link>
              <Link
                href="/billing"
                className={buttonClassName({ variant: "outline", className: "w-full justify-start" })}
              >
                Billing
              </Link>
              <Link
                href="/compliance"
                className={buttonClassName({ variant: "outline", className: "w-full justify-start" })}
              >
                Compliance
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
