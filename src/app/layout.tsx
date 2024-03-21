import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/theme/theme";
import StoreProvider from "./StoreProvider";
import { Metadata } from "next";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bandage",
  description: "Smart Online Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <AppRouterCacheProvider>

            <ThemeProvider theme={theme}>

            
              {children}

              
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
