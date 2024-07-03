import { writeFile } from "fs/promises";
import { join } from "path";
import { render } from "@react-email/components";
import { Email } from "./email";

const emailHtml = render(<Email url="https://example.com" />);

async function generateHtml(htmlContent: string) {
  const outputPath = join(process.cwd(), "dist", "index.html");

  try {
    await writeFile(outputPath, htmlContent);
    console.log("index.html has been generated successfully!");
  } catch (err) {
    console.error("Error writing file:", err);
  }
}
generateHtml(emailHtml);
