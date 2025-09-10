import { Mail, Phone, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-2">Lucky HomeStay</h3>
            <p className="text-lg">Your comfort, our priority.</p>
            <p className="text-sm mt-2">Thawalankoya, Ukuwela, Matale</p>
          </div>
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold text-primary mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="/privacy" className="hover:text-primary transition-colors duration-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition-colors duration-300">Terms of Service</a>
              <a href="/contact" className="hover:text-primary transition-colors duration-300">Contact Us</a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-lg font-semibold text-primary mb-4">Contact Info</h4>
            <p className="text-base flex items-center gap-2 mb-2">
              <Mail className="h-5 w-5 text-primary" /> info@luckyhomestay.com
            </p>
            <p className="text-base flex items-center gap-2 mb-2">
              <Phone className="h-5 w-5 text-primary" /> 0777237120
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">&copy; {new Date().getFullYear()} Lucky HomeStay. All rights reserved.</p>
          <p className="text-sm">Developed by Mohamed Zaheer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
