import { App } from "https://deno.land/x/attain/mod.ts";
import type { Request, Response } from "https://deno.land/x/attain/mod.ts";

const app = new App();

const sampleMiddleware = (req: Request, res: Response) => {
  console.log("before send");
};



app.listen(3500);
