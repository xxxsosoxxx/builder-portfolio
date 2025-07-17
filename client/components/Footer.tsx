export function Footer() {
  return (
    <footer className="bg-white border-t border-border py-12">
      <div className="section-padding">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © Souheila Said 2025 – All rights reserved
            </div>

            {/* Legal Links */}
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8">
              <a
                href="/accessibility"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Accessibility statement
              </a>
              <a
                href="/terms-of-use"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
