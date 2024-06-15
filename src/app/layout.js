import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
        <body>
      <ChakraProvider theme={theme}>
      {children}
      </ChakraProvider>
        </body>
    </html>
  );
}
