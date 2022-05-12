import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonFab,
  IonFabButton,
  IonIcon,
  IonToggle,
  IonCheckbox,
  IonList,
  useIonAlert,
  IonItemDivider,
  IonInput,
  IonPopover,
} from "@ionic/react";
import React, { useState } from "react";
import { add } from "ionicons/icons";

import "./Tab1.css";

const checkboxList = [
  { val: "Pepperoni", isChecked: true },
  { val: "Sausage", isChecked: false },
];

const Tab1: React.FC = () => {
  const [present] = useIonAlert();
  const [checked, setChecked] = useState(false);
  const [toggleChecked, setToggleChecked] = useState(false);
  const [text, setText] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonLabel>Alertas</IonLabel>
        <IonButton
          expand="block"
          onClick={() => present("hello with params", [{ text: "Ok" }])}
        >
          Mostrar alerta
        </IonButton>
        <IonItemDivider />
        <IonLabel>Tarjetas</IonLabel>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Keep close to Nature's heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>
        <IonItemDivider />
        <IonLabel>Listas y checkboxes</IonLabel>
        <IonList>
          {checkboxList.map(({ val, isChecked }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" value={val} checked={isChecked} />
            </IonItem>
          ))}
        </IonList>
        <IonItemDivider />
        <IonLabel>Switch</IonLabel>
        <IonItem>
          <IonLabel>Activo: {JSON.stringify(toggleChecked)}</IonLabel>
          <IonToggle
            checked={toggleChecked}
            onIonChange={(e) => setToggleChecked(e.detail.checked)}
          />
        </IonItem>
        <IonItemDivider />
        <IonLabel>Entrada con placeholder</IonLabel>
        <IonItem>
          <IonInput
            value={text}
            placeholder="Ingrese algo"
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItemDivider />
        <IonLabel>Dialogos</IonLabel>
        <br />
        <IonButton id="side-button">Click para abrir el dialogo</IonButton>
        <IonPopover trigger="side-button" side="top">
          <IonContent>Popover Content</IonContent>
        </IonPopover>
        {/* <IonLabel>Boton flotante</IonLabel> */}
        <IonItemDivider />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
