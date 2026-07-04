import React, { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { useLenis } from '@/hooks/use-lenis';

import FloatingContactWidget from '@/components/ui/floating-contact-widget';

const Home = React.lazy(() => import('@/pages/Home'));
const About = React.lazy(() => import('@/pages/About'));
const Speaking = React.lazy(() => import('@/pages/Speaking'));
const Organisations = React.lazy(() => import('@/pages/Organisations'));
const Media = React.lazy(() => import('@/pages/Media'));
const Testimonials = React.lazy(() => import('@/pages/Testimonials'));
const Book = React.lazy(() => import('@/pages/Book'));
const Contact = React.lazy(() => import('@/pages/Contact'));
const PrivacyPolicy = React.lazy(() => import('@/pages/PrivacyPolicy'));
const Terms = React.lazy(() => import('@/pages/Terms'));
const NotFound = React.lazy(() => import('@/pages/not-found'));

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
    </Suspense>
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
