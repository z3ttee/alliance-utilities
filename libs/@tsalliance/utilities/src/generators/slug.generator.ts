import { Random } from "./random.generator";

export class Slug {

    /**
     * Create a slug from string but with a certain length.
     * This adds 6 random chars at the end to avoid duplicates.
     * If the input string length + 6 would exceed speicifed length,
     * then the input is trimmed so it can fit the 6 random chars in.
     * @param input Input string
     * @param length maximum length of result string.
     * @returns string
     */
    public static create(input: string, length = 120): string {
        input = Slug.format(input);

        if(input.length > length) {
            return input.substring(0, length) + "-" + Random.randomString(6);
        } else {
            return input + "-" + Random.randomString(6);
        }
    }

    /**
     * Apply the slug formatting on a string.
     * @param input String to format like a slug
     * @returns string
     */
    public static format(input: string): string {
        return `${input.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-")}`
    }

}