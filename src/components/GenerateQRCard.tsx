import { Button } from "@/components/ui/button";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const GenerateQrCard = () => {
  const [qrCodeData, setQrCodeData] = useState("");

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const url = event.target.value;

    setQrCodeData(url);
    localStorage.setItem("qr-code", url);
  };

  return (
    <div className="h-screen flex justify-center items-center ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Generate QR Code</CardTitle>
          <CardDescription>Generate your QR Code using URL</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">URL</Label>

                <Input
                  id="url"
                  placeholder="Enter URL"
                  onChange={handleUrlChange}
                  value={qrCodeData}
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full" variant="default">
                Generate
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] w-80 grid">
              <DialogHeader>
                <DialogTitle className="mb-4">Scan QR Code</DialogTitle>
                {qrCodeData && (
                  <QRCodeSVG
                    className="place-self-center"
                    width="250"
                    height="250"
                    value={qrCodeData}
                  />
                )}
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default GenerateQrCard;
