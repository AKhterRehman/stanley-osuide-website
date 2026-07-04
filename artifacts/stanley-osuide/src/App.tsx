import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { useLenis } from '@/hooks/use-lenis';

import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Speaking from '@/pages/Speaking';
import Organisations from '@/pages/Organisations';
import Media from '@/pages/Media';
import Testimonials from '@/pages/Testimonials';
import Book from '@/pages/Book';
import Contact from '@/pages/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Terms from '@/pages/Terms';
import FloatingContactWidget from '@/components/ui/floating-contact-widget';

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/speaking" component={Speaking} />
      <Route path="/organisation" component={Organisations} />
      <Route path="/organisations" component={Organisations} />
      <Route path="/media" component={Media} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/book" component={Book} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useLenis(); // Initialize smooth scrolling and dark mode globally

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
          <FloatingContactWidget />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
