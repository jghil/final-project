set client_min_messages to warning;
-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;
create schema "public";

CREATE TABLE "public"."users" (
  "userId" serial NOT NULL,
  "username" TEXT NOT NULL UNIQUE,
  "hashedPassword" TEXT NOT NULL,
  "createdAt" TIMESTAMPTZ NOT NULL default now(),
  CONSTRAINT "users_pk" PRIMARY KEY ("userId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."recipes" (
    "recipeId" serial NOT NULL,
    "userId" integer NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL default now(),
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "directions" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "prepTime" TEXT NOT NULL,
    "cookTime" TEXT NOT NULL,
    -- "beverage" BOOLEAN NOT NULL,
    -- "breakfast" BOOLEAN NOT NULL,
    -- "dinner" BOOLEAN NOT NULL,
    -- "snack" BOOLEAN NOT NULL,
    -- "lunch" BOOLEAN NOT NULL,
    "skillLevel" integer NOT NULL,
    CONSTRAINT "recipes_pk" PRIMARY KEY ("recipeId")
) WITH (
  OIDS=FALSE
);
CREATE TABLE "public"."ingredients" (
    "ingredientId" serial NOT NULL,
    "recipeId" integer NOT NULL,
    "allIngredients" TEXT NOT NULL,
    CONSTRAINT "ingredients_pk" PRIMARY KEY ("ingredientId")
) WITH (
  OIDS=FALSE
);
ALTER TABLE "recipes" ADD CONSTRAINT "recipes_fk0" FOREIGN KEY ("userId") REFERENCES "users"("userId");
ALTER TABLE "ingredients" ADD CONSTRAINT "ingredients_fk0" FOREIGN KEY ("recipeId") REFERENCES "recipes"("recipeId");
