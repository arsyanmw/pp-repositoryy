import { DeleteDateColumn, UpdateDateColumn, CreateDateColumn, Column } from "typeorm";

export abstract class Base {
    @Column({
        name: "deleted_at"
    })
    deletedAt: Date;

    @UpdateDateColumn({
        name: "updated_at"
    })
    updatedAt: Date;

    @CreateDateColumn({
        name: "created_at"
    })
    createdAt: Date;

    @Column({
        name: "status",
        type: "int"
    })
    status: number;
}