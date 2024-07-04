import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Row,
  Column,
  Text,
  Link,
  Button,
  Img,
  Hr,
} from "@react-email/components";

interface EmailProps {
  url: string;
}

export const Email: React.FC<Readonly<EmailProps>> = ({ url }) => {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Body>
        <Container
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "24px",
            backgroundColor: "#F4F6F9",
          }}
        >
          <Section style={{ marginBottom: "24px" }}>
            <Row>
              <Column style={{ width: "50%" }}>
                <Img
                  src="https://react.dev/apple-touch-icon.png"
                  alt="react.js"
                  width="32"
                  height="32"
                />
              </Column>
              <Column
                style={{ width: "50%", textAlign: "right", fontSize: "16px" }}
              >
                React+Email
              </Column>
            </Row>
          </Section>
          <Hr />
          <Section>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "rgba(0,0,0,0.87)",
              }}
            >
              The next generation of writing emails
            </Text>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(0,0,0,0.6)",
              }}
            >
              A collection of high-quality, unstyled components for creating
              beautiful emails using React and TypeScript.
            </Text>
            <Link href={url}>Read More</Link>
          </Section>
          <Container
            style={{
              marginTop: "24px",
              padding: "24px",
              backgroundColor: "#FFFFFF",
              borderRadius: "8px",
              border: "1px solid #E0E0E0",
            }}
          >
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "rgba(0,0,0,0.87)",
              }}
            >
              Components
            </Text>
            <Text
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(0,0,0,0.6)",
              }}
            >
              This is a set of standard components to help you build amazing
              emails without having to deal with the mess of creating
              table-based layouts and maintaining archaic markup.
            </Text>
            <Section
              style={{
                backgroundColor: "#F9F9F9",
                padding: "24px",
                borderRadius: "8px",
              }}
            >
              <Row>
                <Text
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "rgba(0,0,0,0.87)",
                  }}
                >
                  Container
                </Text>
                <Text
                  style={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "rgba(0,0,0,0.60)",
                  }}
                >
                  A layout component that centers all the email content.
                </Text>
              </Row>
              <Row>
                <Column style={{ width: "30px" }}>✅</Column>
                <Column>
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Gmail
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "30px" }}>✅</Column>
                <Column>
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Apple Mail
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "30px" }}>✅</Column>
                <Column>
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Outlook
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "30px" }}>✅</Column>
                <Column>
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Yahoo! Mail
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "30px" }}>✅</Column>
                <Column>
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    HEY
                  </Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "30px" }}>✅</Column>
                <Column>
                  <Text
                    style={{
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "rgba(0,0,0,0.87)",
                    }}
                  >
                    Superhuman
                  </Text>
                </Column>
              </Row>
              <Row>
                <Button
                  href="https://github.com/resend/react-email/tree/main/packages/container"
                  style={{
                    backgroundColor: "#0099EB",
                    color: "#FFFFFF",
                    padding: "16px",
                    borderRadius: "8px",
                    marginTop: "16px",
                  }}
                >
                  Check the code
                </Button>
              </Row>
            </Section>
          </Container>
        </Container>
      </Body>
    </Html>
  );
};
