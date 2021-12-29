// app.get("/:id", (req, res) => {
//     console.log(req.params);
//     res.status(200).send(`id: ${req.params.id}`);
// });
  
// app.use(sampleMiddleware, (req, res) => {
//     res.status(200).send({ status: "Good" });
// });

// const sampleMiddleware =  => {
//     console.log("before send");
// };

function add_route(app: any, path: string, response: string) {
    app.use(() => {}, (req: any, res: any) => {
        res.status(200).send(response);
    })
}

export default function run(app: any) {
    add_route(app, "/", "<b>this is a test</b>");
}
