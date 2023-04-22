import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown-v2';
import moment from 'moment';
import { Card, Button } from 'react-native-elements';

const consultationData = [
  {
    id: '1',
    patientName: 'John Doe',
    doctorName: 'Dr. Smith',
    specialty: 'Cardiology',
    consultationType: 'Upcoming',
    slotDateTime: moment().add(1, 'day').format('YYYY-MM-DD hh:mm A'),
    clinicName: 'XYZ Clinic',
    clinicAddress: '123 Main St., Anytown, USA',
    consultationMode: 'PHONE_CALL',
  },
  {
    id: '2',
    patientName: 'Jane Doe',
    doctorName: 'Dr. Johnson',
    specialty: 'Pediatrics',
    consultationType: 'Completed',
    slotDateTime: moment().subtract(2, 'day').format('YYYY-MM-DD hh:mm A'),
    clinicName: 'ABC Clinic',
    clinicAddress: '456 Broad St., Anytown, USA',
    consultationMode: 'VIDEO_CALL',
  },
  {
    id: '3',
    patientName: 'Bob Smith',
    doctorName: 'Dr. Lee',
    specialty: 'Dermatology',
    consultationType: 'Canceled',
    slotDateTime: moment().subtract(1, 'day').format('YYYY-MM-DD hh:mm A'),
    clinicName: 'DEF Clinic',
    clinicAddress: '789 Main St., Anytown, USA',
    consultationMode: 'PHYSICAL',
  },
];

const Home = () => {
  const [consultationType, setConsultationType] = useState('All Consultations');
  const [consultationDataToShow, setConsultationDataToShow] = useState(consultationData);

  const handleConsultationTypeChange = (value) => {
    setConsultationType(value);
    if (value === 'All Consultations') {
      setConsultationDataToShow(consultationData);
    } else {
      const filteredData = consultationData.filter((item) => item.consultationType === value);
      setConsultationDataToShow(filteredData);
    }
  };

  const handleConsultationModeChange = (value) => {
    if (value === 'All') {
      setConsultationDataToShow(consultationData);
    } else {
      const filteredData = consultationData.filter((item) => item.consultationMode === value);
      setConsultationDataToShow(filteredData);
    }
  };

  const handleOptionPress = () => {
    // handle option press
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.dropdownContainer}>
        <Dropdown
          label="Consultation Type"
          data={[
            { value: 'Upcoming' },
            { value: 'Prescription Pending' },
            { value: 'Completed' },
            { value: 'Canceled' },
            { value: 'All Consultations' },
          ]}
          value={consultationType}
          onChangeText={handleConsultationTypeChange}
        />
        <Dropdown
          label="Consultation Mode"
          data={[
            { value: 'All' },
            { value: 'VIDEO_CALL' },
            { value: 'PHONE_CALL' },
            { value: 'PHYSICAL' },
          ]}
          onChangeText={handleConsultationModeChange}
        />
      </View>
      {consultationDataToShow.map((item) => (
        <Card key={item.id}>
          <Card.Image source={{ uri: 'https://picsum.photos/200' }} />
          <Card.Title>{item.doctorName}</Card.Title>
          <Card.FeaturedSubtitle>{item.specialty}</Card.FeaturedSubtitle>
          <Card.FeaturedSubtitle>{item.consultationType}</Card.FeaturedSubtitle>
          <Card.FeaturedSubtitle>{item.slotDateTime}</Card.FeaturedSubtitle>
          {item.consultationMode === 'PHYSICAL' && (
            <>
              <Card.FeaturedSubtitle>{item.clinicName}</Card.FeaturedSubtitle>
              <Card.FeaturedSubtitle>{item.clinicAddress}</Card.FeaturedSubtitle>
            </>
          )}
          <Button
            onPress={handleOptionPress}
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title="OPTIONS"
          />
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
});

export default HomeScreen;

