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
  Linking
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
            justifyContent: "space-around"
          }}
        >
          <div
            style={{ flexDirection: "column", width: 500, textAlign: "center" }}
          >
            <div style={{ textAlign: "center" }}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  textAlign: "center"
                }}
              >
                So what's a hackathon?
              </Text>
            </div>
            <Text style={{ fontSize: 20 }}>
              A 24-hour competition where participants create a software project
              for judging.
            </Text>
          </div>

          <div
            style={{ flexDirection: "column", width: 500, textAlign: "center" }}
          >
            <div style={{ textAlign: "center" }}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                And why should I come?
              </Text>
            </div>
            <Text style={{ fontSize: 20 }}>
              You'll learn new programming skills from workshops, engage with
              students from all around, and potentially win prizes.
            </Text>
          </div>
        </View>

        <View
          style={{
            alignItems: "center",
            height: 500,
            justifyContent: "center"
          }}
        >
          <div style={{ width: 500, textAlign: "center" }}>
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
              width: 500,
              marginTop: 50
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
              Sponsors
            </Text>
            <div>
              <Text style={{ fontSize: 20 }}>
                Interested? Email{" "}
                <Text
                  onPress={() =>
                    Linking.openURL("mailto:jackieni2002@gmail.com")
                  }
                >
                  jackieni2002@gmail.com
                </Text>
              </Text>
            </div>
          </div>
          <Image
            source="https://sagehack.s3.eu-west-3.amazonaws.com/0.png"
            style={{ width: 200, height: 200 }}
          />
        </View>
      </ScrollView>
    );
  }
}

export default App;
