import React from 'react';
import { View, Modal, Platform, TouchableOpacity, Button } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// import { Container } from './styles';

interface Props {
  date: number | Date;
  show: boolean;
  onchange(event: any, selectedDate: any): void;
  setShow(): void;
}

const PlatformDate: React.FC<Props> = ({ date, onchange, show, setShow }) => {
  const initialDate = date !== 0 ? date : new Date();

  return Platform.OS === 'ios' ? (
    <Modal visible={show} transparent>
      <TouchableOpacity
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,.4)',
          justifyContent: 'center',
        }}
        onPress={setShow}
      >
        <View
          style={{
            backgroundColor: 'white',
            zIndex: 1,
            borderRadius: 10,
            margin: 10,
          }}
        >
          <DateTimePicker
            testID="dateTimePicker"
            value={initialDate}
            mode="date"
            locale="PT-BR"
            is24Hour
            display="spinner"
            onChange={onchange}
          />
          <View style={{ marginVertical: 20 }}>
            <Button title="Confirmar" onPress={setShow} />
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  ) : (
    show && (
      <DateTimePicker
        testID="dateTimePicker"
        value={initialDate}
        mode="date"
        locale="PT-BR"
        is24Hour
        display="spinner"
        onChange={onchange}
      />
    )
  );
};

export default PlatformDate;
