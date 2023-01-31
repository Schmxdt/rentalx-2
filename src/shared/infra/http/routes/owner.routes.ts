import { CreateOwnerController } from "@modules/owner/useCases/createOwner/CreateOwnerController";

import { Router } from "express";

const ownerRoutes = Router()

const createOwnerController = new CreateOwnerController();

ownerRoutes.post('/', createOwnerController.handle)

ownerRoutes.get

ownerRoutes.put

ownerRoutes.delete

export { ownerRoutes }