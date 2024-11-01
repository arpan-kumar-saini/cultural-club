import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t px-4 md:px-6 py-6 flex flex-col items-center justify-center w-full">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:gap-56 text-center">
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold">About</h4>
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            About the Club
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            Gallery
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold">Quick Links</h4>
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            Events
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            Gallery
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:underline" prefetch={false}>
            Contact
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold">Contact</h4>
          <div className="text-sm text-muted-foreground">
            123 Main Street
            <br />
            Anytown, USA
            <br />
            (123) 456-7890
            <br />
            info@clubname.com
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold">Follow Us</h4>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary focus:text-primary"
              prefetch={false}
            >
              <FacebookIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary focus:text-primary"
              prefetch={false}
            >
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary focus:text-primary"
              prefetch={false}
            >
              <InstagramIcon className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-primary focus:text-primary"
              prefetch={false}
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Icons remain the same
// ... (FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon remain unchanged)


function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
