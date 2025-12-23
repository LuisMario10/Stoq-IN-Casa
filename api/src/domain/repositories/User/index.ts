import { create } from "./Create"
import { deleteByID } from "./DeleteByID"
import { findAll } from "./FindAll"
import { findByID } from "./FindByID"
import { updateByID } from "./UpdateByID"

export const UserRepository = {
    create,
    findAll,
    findByID,
    updateByID,
    deleteByID
}