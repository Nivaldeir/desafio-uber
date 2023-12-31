import { Http } from "./infra/http";
import { ExpressAdapter } from "./infra/http/ExpressAdapter";

const express = new ExpressAdapter()
new Http(express)
express.listen(3000)