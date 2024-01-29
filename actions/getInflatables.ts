'use server';
import prisma from "@/lib/prisma";

class InflatableNotFoundErr extends Error { }
class dbConnectionErr extends Error { }

export const GetAllInflatables = async () => {
    try {
        const data = await prisma?.inflatables.findMany()
        if (!data) {
            throw new InflatableNotFoundErr()
        }
        return data
    } catch (error) {
        throw new dbConnectionErr()
    }
}