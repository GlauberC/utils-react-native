import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, View, Text, Button } from 'react-native';
import SkeletonContainer from './SkeletonContainer';

import { styles } from './styles';

// import { Container } from './styles';
interface IItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

const dataTemp: IItem[] = [
  {
    id: '01',
    title: 'title01',
    date: '11/12/2020',
    description: 'Descrição01',
  },
  {
    id: '02',
    title: 'title02',
    date: '12/12/2020',
    description: 'Descrição02',
  },
  {
    id: '03',
    title: 'title03',
    date: '13/12/2020',
    description: 'Descrição03',
  },
];

const Skeleton: React.FC = () => {
  const [itens, setItens] = useState<IItem[]>([]);
  const [loading, setLoading] = useState(false);

  const handleReload = useCallback(() => {
    setItens([]);
    setLoading(true);
    setTimeout(() => {
      setItens(dataTemp);
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    handleReload();
  }, [handleReload]);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Recarregar" onPress={handleReload} />
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <>
            {loading && (
              <>
                <SkeletonContainer />
                <SkeletonContainer />
                <SkeletonContainer />
              </>
            )}
          </>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.itemHeader}>
              <Text>{item.title}</Text>
              <Text>{item.date}</Text>
            </View>
            <View style={styles.itemBody}>
              <Text>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Skeleton;
