import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRow,
  IonCol,
} from "@ionic/react";
import "./Tab2.css";

import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Toast } from "@capacitor/toast";
import { Clipboard } from "@capacitor/clipboard";
import { Dialog } from "@capacitor/dialog";
import { Device } from "@capacitor/device";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

const takePicture = async () => {
  await Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
    quality: 100,
  });
};

const showHelloToast = async () => {
  await Toast.show({
    text: "Hello!",
  });
};

const writeToClipboard = async () => {
  await Clipboard.write({
    string: "Hello World!",
  });
};

const checkClipboard = async () => {
  const { type, value } = await Clipboard.read();
  console.log();
  await Toast.show({
    text: `Got ${type} from clipboard: ${value}`,
  });
};

const showAlert = async () => {
  await Dialog.alert({
    title: "Stop",
    message: "this is an error",
  });
};

const logDeviceInfo = async () => {
  const info = await Device.getInfo();
  console.log(info);
  await Toast.show({
    text: `Marca: ${info.manufacturer}, Modelo: ${info.model}, Version: ${info.osVersion}`,
  });
};

const hapticsImpactMedium = async () => {
  await Haptics.impact({ style: ImpactStyle.Heavy });
};

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonButton expand="block" onClick={() => takePicture()}>
          Camara
        </IonButton>
        <IonButton expand="block" onClick={() => showHelloToast()}>
          Toast
        </IonButton>
        <IonRow>
          <IonCol size="6">
            <IonButton expand="block" onClick={() => writeToClipboard()}>
              Guardar datos en el portapapeles
            </IonButton>
          </IonCol>
          <IonCol size="6">
            <IonButton expand="block" onClick={() => checkClipboard()}>
              Leer datos del portapapeles
            </IonButton>
          </IonCol>
        </IonRow>
        <IonButton expand="block" onClick={() => showAlert()}>
          Mostrar alerta
        </IonButton>
        <IonButton expand="block" onClick={() => logDeviceInfo()}>
          Informacion del dispositivo
        </IonButton>
        <IonButton expand="block" onClick={() => hapticsImpactMedium()}>
          Vibración media
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
