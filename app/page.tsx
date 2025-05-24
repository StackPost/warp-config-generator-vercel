import Image from "next/image"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { WarpGenerator } from "@/components/warp-generator"

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-4 w-full">
        <Alert className="alert mb-6 break-words" style={{display: "none"}}>
          <AlertTitle>Telegram Bot для генерации конфигов WARP</AlertTitle>
          <AlertDescription className="break-words">
            Создал бота для генерации конфигов, если сайт вдруг перестанет работать:{" "}
            <a href="#" className="font-medium">
              Warp Generator Bot
            </a>
          </AlertDescription>
        </Alert>
        <div className="flex flex-col items-center justify-center gap-6 w-[300px]">
          <Image src="/logo.svg" alt="Логотип" width={300} height={300}/>
          <WarpGenerator/>
          <Button asChild className="w-full">
            <a href="https://github.com/amnezia-vpn/amneziawg-windows-client/releases/download/1.0.0/amneziawg-amd64-1.0.0.msi">amneziawg-amd64-1.0.0.msi</a>
          </Button>
           <Button asChild className="w-full">
            <a href="https://github.com/amnezia-vpn/amneziawg-windows-client/releases/download/1.0.0/amneziawg-arm64-1.0.0.msi">amneziawg-arm64-1.0.0.msi</a>
          </Button>
           <Button asChild className="w-full">
            <a href="https://github.com/amnezia-vpn/amneziawg-windows-client/releases/download/1.0.0/amneziawg-x86-1.0.0.msi">amneziawg-x86-1.0.0.msi</a>
          </Button>
          <p className="text-sm text-muted-foreground">
            AmneziaWG 1.0.0 for Windows
          </p>
        </div>
      </main>
  )
}
