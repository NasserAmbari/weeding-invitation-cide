import { z } from "zod";

export const schemaRSVPForm = z.object({
  fullname: z.string().min(1, "Nama lengkap wajib diisi"),
  attendance: z.enum(["Hadir", "Tidak Hadir", "Tentative"]),
  message: z.string().min(1, "Pesan wajib diisi"),
});

export type RSVPFormData = z.infer<typeof schemaRSVPForm>;
