import { App } from "https://deno.land/x/attain/mod.ts";
import run from "./src/srv/api/index.ts";

const app = new App();

run(app);
app.listen(3500);
