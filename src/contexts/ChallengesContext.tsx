import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

interface ChallengesProviderProps {
    children: ReactNode
}

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLeve] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    function levelUp() {
        setLeve(level + 1);
    }

    return (
        <ChallengesContext.Provider value={{level, currentExperience, challengesCompleted, levelUp}}>
            {children}
        </ChallengesContext.Provider>
    );
}