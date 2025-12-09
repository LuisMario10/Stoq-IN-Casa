import { create } from "./Create"
import { findAll } from "./FindAll"
import { findByID } from "./FindById"
import { updateByID } from "./UpdateById"
import { deleteByID } from "./DeleteById"

export const ProductRepository = {
    create,
    findAll,
    findByID,
    updateByID,
    deleteByID
}