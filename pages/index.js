// @generated: @expo/next-adapter@2.0.0-beta.9
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Linking,
  TouchableWithoutFeedback
} from "react-native";

class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View
          style={{
            height: 900,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <Image
            source={
              "https://sagehack.s3.eu-west-3.amazonaws.com/SageHackLogo2.png"
            }
            style={{ width: 350, height: 225 }}
          />
          <Text style={{ fontSize: 40, marginTop: 20 }}>
            Sage Hill School's First Hackathon
          </Text>
          <Text style={{ fontSize: 40, marginTop: 5 }}>
            January 17-18, 2020
          </Text>
          <TouchableOpacity
            style={{
              alignItems: "center",
              backgroundColor: "#52c41a",
              padding: 10,
              marginTop: 10
            }}
            onClick={() =>
              Linking.openURL("https://jackien1.typeform.com/to/Gattb7")
            }
          >
            <Text style={{ color: "white", fontSize: 20 }}> Apply Now 👋 </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            alignItems: "center",
            height: 500,
            justifyContent: "center"
          }}
        >
          <div style={{ textAlign: "center" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold"
              }}
            >
              Challenges
            </Text>
            <div>
              <Text style={{ fontSize: 20 }}>
                “Build something that addresses a specific need in your
                community”
              </Text>
            </div>
          </div>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 25
            }}
          >
            <div>
              <Text style={{ fontSize: 20 }}>
                <Text style={{ fontStyle: "italic" }}> Educational </Text> 📚
              </Text>
            </div>

            <div>
              <Text style={{ fontSize: 20 }}>
                <Text style={{ fontStyle: "italic" }}> Health </Text> 🏥
              </Text>
            </div>

            <div>
              <Text style={{ fontSize: 20 }}>
                <Text style={{ fontStyle: "italic" }}> Environmental </Text> 🍃
              </Text>
            </div>
          </View>
        </View>

        <View
          style={{
            alignItems: "center",
            height: 500,
            justifyContent: "center"
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              Schedule
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center"
                }}
              >
                Day One (Friday)
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontSize: 20, marginRight: 200 }}>
                Registration
              </Text>
              <Text style={{ fontSize: 20 }}>4pm - 5pm</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 20 }}>Speaker</Text>
              <Text style={{ fontSize: 20 }}> 5pm - 5:30pm </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 20 }}>Pairings</Text>
              <Text style={{ fontSize: 20 }}> 5:30pm - 6pm </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 20 }}>Code Sprint</Text>
              <Text style={{ fontSize: 20 }}> 6pm - 9pm </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center"
                }}
              >
                Day Two (Saturday)
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text style={{ fontSize: 20, marginRight: 200 }}>Check-in</Text>
              <Text style={{ fontSize: 20 }}>8am - 9am</Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 20 }}>Code Sprint</Text>
              <Text style={{ fontSize: 20 }}> 9am - 3pm </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 20 }}>Presentations</Text>
              <Text style={{ fontSize: 20 }}> 3pm - 5pm </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 20 }}>Judging</Text>
              <Text style={{ fontSize: 20 }}> 5pm - 6pm </Text>
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 20 }}>Awards Ceremony</Text>
              <Text style={{ fontSize: 20 }}> 6pm - 7pm </Text>
            </View>
          </div>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 500
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>FAQ</Text>
          <TouchableWithoutFeedback>
            <View style={{ width: 350 }}>
              <Text
                style={{
                  fontSize: 20,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: "#ddd",
                  borderBottomWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  padding: 5
                }}
              >
                What is a hackathon?
              </Text>

              <View>
                <Text>
                  A 24-hour coding competition where participants make a
                  software project for judging.
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={{ width: 350 }}>
              <Text
                style={{
                  fontSize: 20,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: "#ddd",
                  borderBottomWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  padding: 5
                }}
              >
                What if I'm new?
              </Text>

              <View>
                <Text>
                  Have no fear! We have mentors and workshops to get everyone up
                  and running.
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={{ width: 350 }}>
              <Text
                style={{
                  fontSize: 20,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: "#ddd",
                  borderBottomWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  padding: 5
                }}
              >
                Where is SageHack?
              </Text>

              <View>
                <Text>20402 Newport Coast Dr, Newport Coast, CA 92657</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={{ width: 350 }}>
              <Text
                style={{
                  fontSize: 20,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: "#ddd",
                  borderBottomWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  padding: 5
                }}
              >
                Who can come?
              </Text>

              <View>
                <Text>All high school students in California.</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={{ width: 350 }}>
              <Text
                style={{
                  fontSize: 20,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: "#ddd",
                  borderBottomWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  padding: 5
                }}
              >
                What are the benefits?
              </Text>
              <View>
                <Text>
                  Free meals and snacks. Plus, you may potentially win some
                  prizes.
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback>
            <View style={{ width: 350 }}>
              <Text
                style={{
                  fontSize: 20,
                  borderWidth: 1,
                  borderRadius: 2,
                  borderColor: "#ddd",
                  borderBottomWidth: 0,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 2,
                  padding: 5
                }}
              >
                Can you work on the code before?
              </Text>
              <View>
                <Text>No.</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <View
          style={{
            alignItems: "center",
            height: 1000,
            justifyContent: "center"
          }}
        >
          <div
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              Sponsors
            </Text>
            <div>
              <Text style={{ fontSize: 20 }}>
                Interested? Email{" "}
                <Text
                  onPress={() => Linking.openURL("mailto:info@sagehack.io")}
                >
                  info@sagehack.io
                </Text>
              </Text>
            </div>
          </div>
          <Image
            source="https://sagehack.s3.eu-west-3.amazonaws.com/0.png"
            style={{ width: 200, height: 200 }}
          />
          <Image
            source="https://sagehack.s3.eu-west-3.amazonaws.com/732c2a360edfdef425ff097b02830ad5e1880ab8.png"
            style={{ width: 300, height: 75 }}
          />
          <Image
            source="https://sagehack.s3.eu-west-3.amazonaws.com/286fcd415deb9f4134f04584b7c21927e5047b68.png"
            style={{ width: 300, height: 75 }}
          />
          <Image
            source="https://sagehack.s3.eu-west-3.amazonaws.com/20172349.png"
            style={{ width: 200, height: 200 }}
          />
          <Image
            source="https://sagehack.s3.eu-west-3.amazonaws.com/sdwfdeotz3ujbaeqsae5.png"
            style={{ width: 200, height: 200 }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default App;
