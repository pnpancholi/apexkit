import {pgTable, text, timestamp, boolean, uuid} from "drizzle-orm/pg-core"

export const user = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),//Better-Auth expects this.
  name: text("name").notNull(),
  email: text("email").notNull().unique(), // one account per email
  emailVerified: boolean("email_verfied").default(false),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
})

export const session = pgTable("session", {
  id: uuid("id").primaryKey().defaultRandom(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, {onDelete: "cascade"}),
  createdAt: timestamp("created_at").defaultNow().notNull(),
})

export const account = pgTable("account", {
  id: uuid("id").primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .notNull()
    .references(() => user.id, {onDelete: "cascade"}),
  providerId: text("provider_id").notNull(),
  providerAccountId: text("provider_account_id").notNull(),
  access_token: text("access_token"),
  referesh_token: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("access_token_expires_at"), 
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
})

export const verificationToken = pgTable("verification_table", {
  indentifier: text("identifier").notNull(),
  token: text("token").notNull(),
  expires: timestamp("expires").notNull()
})
