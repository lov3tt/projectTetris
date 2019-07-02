class Connection{
    constructor(){
        this.conn = null;
    }
    connect(address){
        this.conn = new WebSocket(address);

        this.conn.addEventListener("open", () => {
            console.log("Connected!")



            this.conn.send("create-session")
        })
    }
}