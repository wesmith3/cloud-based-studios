'use client'
import React from "react";
import {
  Segment,
  Container,
  Grid,
  Header,
  List,
  Button,
  Icon,
} from "semantic-ui-react";

function Footer() {
  return (
    <div className="footer">
      <Segment inverted vertical style={{ padding: "2em 0em" }}>
        <Container>
          <Grid divided inverted>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About" />
                <List link inverted>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">FAQ&apos;s</List.Item>
                  <List.Item as="a">
                    Back to the Top
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={2}>
                <Header inverted as="h4" content="Website Created By:" />
                <List link inverted>
                  <List.Item as="a" href="https://github.com/wesmith3">
                    Wesley Smith
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as="h4" inverted>
                  Follow Cloud Based Studios!
                </Header>
                <Button color="facebook">
                  <Icon name="facebook" /> Facebook
                </Button>
                <Button color="twitter">
                  <Icon name="twitter" /> Twitter
                </Button>
                <Button color="instagram">
                  <Icon name="instagram" /> Instagram
                </Button>
                <Button color="youtube">
                  <Icon name="youtube" /> YouTube
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default Footer;
