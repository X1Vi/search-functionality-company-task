import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const blogPosts = [
    { title: 'React Native Basics', description: 'Learn the basics of React Native in this comprehensive guide.' },
    { title: 'Advanced React Native', description: 'Explore advanced techniques for building mobile apps.' },
    { title: 'Styling Tips', description: 'Best practices for styling React Native components.' },
    { title: 'State Management', description: 'An overview of state management solutions for React Native.' },
    { title: 'Optimizing Performance', description: 'Improve the performance of your React Native apps.' },
  ];

  const filteredPosts = blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#f9f9f9' }}>
      <TextInput
        style={{
          height: 40,
          borderColor: '#ddd',
          borderWidth: 1,
          borderRadius: 5,
          paddingHorizontal: 10,
          marginBottom: 20,
          backgroundColor: '#fff',
        }}
        placeholder="Search blog posts..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post, index) => (
          <View
            key={index}
            style={{
              marginBottom: 15,
              padding: 15,
              backgroundColor: '#fff',
              borderRadius: 5,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 2 },
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5 }}>
              {post.title}
            </Text>
            <Text style={{ fontSize: 14, color: '#555' }}>{post.description}</Text>
          </View>
        ))
      ) : (
        <Text style={{ fontSize: 16, color: '#999', textAlign: 'center', marginTop: 20 }}>
          No blog posts found
        </Text>
      )}
    </View>
  );
};

export default App;
