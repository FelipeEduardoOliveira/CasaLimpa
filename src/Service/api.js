import firebase from "./firebase";

export async function cadastraUser(nome, email, endereco, celular, tipo, uid) {
  await firebase.firestore().collection("cadastraUsuario").doc(`${uid}`).set({
    nome,
    email,
    endereco,
    celular,
    tipo,
  });
}

export async function GetUsers() {
  return await firebase.firestore().collection("cadastraUsuario").get();
}
export async function DeletUsers(id) {
  return await firebase
    .firestore()
    .collection("cadastraUsuario")
    .doc(id)
    .delete();
}
