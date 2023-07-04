import { Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";

const PostBoxModal = ({ visible, setVisible, hideModal, set, data }) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={{
          backgroundColor: "#fff",
          paddingVertical: "1.5rem",
          paddingHorizontal: "1rem",
          marginHorizontal: "1.5rem",
        }}
      >
        <Text style={{ fontSize: "1.5rem", fontWeight: "600" }}>
          {data?.topic}
        </Text>
        <TextInput
          style={styles.input}
          onChange={(e) => {
            set({
              ...data,
              note: e.target.value,
            });
          }}
          editable
          multiline
          numberOfLines={4}
          maxLength={200}
          placeholder="Add Note (max. 200 character)"
          keyboardType="numeric"
        />
        <Text style={styles.postBtn}
          onPress={() => {
            console.log(data);
            setVisible(false);
          }}
        >
          Post
        </Text>
      </Modal>
    </Portal>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 140,
    border:"1px solid #0F766E",
    marginVertical:"1rem",
    padding: "1rem",
  },
  postBtn:{
    border:"1px solid #0F766E",
    backgroundColor:"#0F766E",
    width:"100%",
    paddingVertical:"0.5rem",
    color:"#fff",
    textAlign:"center",
    fontSize:"1.35rem"
  }
});

export default PostBoxModal;
