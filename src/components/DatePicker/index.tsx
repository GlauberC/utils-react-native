import React, { useMemo, useRef, useState } from 'react';
import { View, Button, Platform, TouchableOpacity, Text } from 'react-native';
import DateTimePicker, {
  BaseProps,
} from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { styles } from './styles';
import PlatformDate from './PlatformDate';

const DatePicker = () => {
  const [date, setDate] = useState(0);
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const dateShow = useMemo(() => format(date, 'dd/MM/yyyy'), [date]);

  return (
    <View>
      <PlatformDate
        date={date}
        onchange={onChange}
        show={show}
        setShow={() => setShow(!show)}
      />

      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.input}
        onPress={() => setShow(!show)}
      >
        {date !== 0 ? (
          <>
            <Text>{dateShow}</Text>
          </>
        ) : (
          <Text style={styles.placeholder}>Selecione a data</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DatePicker;
