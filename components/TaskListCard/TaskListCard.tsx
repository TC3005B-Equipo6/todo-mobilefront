import { TaskList } from '@/types/TaskList';
import { router } from 'expo-router';
import React from 'react';
import { Text } from "react-native";
import { Box } from '../ui/box';
import { Pressable } from '../ui/pressable';
import { Progress, ProgressFilledTrack } from '../ui/progress';

const TaskListCard: React.FC<{item: TaskList}> = ({item}) => {
    //estados, useState, variables, constantes
    
    //funciones
    const handlePress = () => {
        router.push({
            pathname: "/lists/[id]",
            params: {
                id: item.id,
                title: item.title
            },
        });
    };

    //useEffects
    
    //render

    return (
        <Pressable className="p-4 border border-gray-300 rounded-xl mb-3"
        onPress={handlePress}>
            <Text className="text-lg font-semibold">{item.title}</Text>
            <Text className="text-sm text-gray-500 mb-2"></Text>
            <Box className="mb-3'">
                <Progress value={item.percentage} size="md">
                    <ProgressFilledTrack/>
                </Progress>
                <Text className="text-xs text-gray-500 mt-1">
                    {item.percentage}% complete
                </Text>
            </Box>
        </Pressable>
    );
}

export default TaskListCard;