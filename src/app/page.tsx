import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/text";

export default function Home() {
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
              <Button>New Client</Button>
              <Button variant="outline">Create Task</Button>
            </div>
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          <Card className="border-zinc-200 bg-white text-zinc-900 p-4">
            <CardHeader>
              <CardDescription>Active Clients</CardDescription>
              <CardTitle typography="display">128</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="small" className="text-emerald-600">
                +12 this month
              </Typography>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white text-zinc-900 p-4">
            <CardHeader>
              <CardDescription>Open Tasks</CardDescription>
              <CardTitle typography="display">47</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="small" className="text-amber-600">
                7 high priority
              </Typography>
            </CardContent>
          </Card>
          <Card className="border-zinc-200 bg-white text-zinc-900 p-4">
            <CardHeader>
              <CardDescription>Monthly Revenue</CardDescription>
              <CardTitle typography="display">$84.2K</CardTitle>
            </CardHeader>
            <CardContent>
              <Typography variant="small" className="text-cyan-700">
                +8.4% from last month
              </Typography>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-[1.3fr_1fr]">
          <Card className="border-zinc-200 bg-white p-4">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest updates from your team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between rounded-md bg-zinc-50 px-3 py-2">
                <Typography as="span" variant="small" className="text-zinc-700">
                  Client onboarding completed
                </Typography>
                <Badge variant="success">Done</Badge>
              </div>
              <div className="flex items-center justify-between rounded-md bg-zinc-50 px-3 py-2">
                <Typography as="span" variant="small" className="text-zinc-700">
                  Compliance audit scheduled
                </Typography>
                <Badge variant="warning">Pending</Badge>
              </div>
              <div className="flex items-center justify-between rounded-md bg-zinc-50 px-3 py-2">
                <Typography as="span" variant="small" className="text-zinc-700">
                  Invoice INV-2026-041 sent
                </Typography>
                <Badge variant="default">Sent</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-200 bg-white p-4">
            <CardHeader>
              <CardTitle>Quick Links</CardTitle>
              <CardDescription>Most used modules</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <Button variant="outline" className="justify-start">
                Clients
              </Button>
              <Button variant="outline" className="justify-start">
                Tasks
              </Button>
              <Button variant="outline" className="justify-start">
                Billing
              </Button>
              <Button variant="outline" className="justify-start">
                Compliance
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
