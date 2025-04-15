import Link from "next/link";

import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-primary mb-4 text-6xl font-bold">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">Not Found</h2>
        <p className="text-muted-foreground mb-8 max-w-md">
          Don&#39;t worry, we&#39;re here to help. Let&#39;s get you back on
          track.
        </p>
      </div>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          href={"/"}
          className="bg-primary hover:bg-primary/80 flex items-center justify-center rounded-md px-4 py-4 text-white transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
      <footer className="text-muted-foreground mt-12 text-center text-sm">
        If you believe this is an error, please contact our support team.
      </footer>
    </div>
  );
}
