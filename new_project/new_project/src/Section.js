import { LevelContext } from './LevelContext.js';

export default function Section({level,children}){
    return(
        <section>
            <LevelContext.Provider value={level}>
                {children}
            </LevelContext.Provider>
            {/* If any component inside this <section> asks for LevelContext,
            give them this level..... */}
        </section>
        
    );
}