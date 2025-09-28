import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const query = new QueryClient();

export const TanstackQueryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
};
