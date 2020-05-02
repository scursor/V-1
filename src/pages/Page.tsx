import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import React from 'react';
import { useParams } from 'react-router';
import './Page.css';
const Page: React.FC = () => {
  const { name } = useParams<{ name: string; }>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader> Geolocation </IonCardHeader>
          <IonCardTitle> Current Location </IonCardTitle><br/>
          <IonCardSubtitle> Getting CurrentPosition</IonCardSubtitle><br/>
          <IonCardContent id = "lister">
          </IonCardContent>
          </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Page;
