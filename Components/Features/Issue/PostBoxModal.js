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
          paddingVertical: 24,
          paddingHorizontal: 16,
          marginHorizontal: 24,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: 600 }}>{data?.topic}</Text>
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
        <Text
          style={styles.postBtn}
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
    border: "1px solid #0F766E",
    marginVertical: 16,
    padding: 16,
  },
  postBtn: {
    border: "1px solid #0F766E",
    backgroundColor: "#0F766E",
    width: "100%",
    paddingVertical: 8,
    color: "#fff",
    textAlign: "center",
    fontSize: 21.6,
  },
});

export default PostBoxModal;
