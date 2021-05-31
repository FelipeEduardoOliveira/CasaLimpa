import firebase from "./firebase";

export async function cadastraUser(nome, email, endereco, celular, tipo) {
  await firebase.firestore().collection("cadastraUsuario").add({
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
