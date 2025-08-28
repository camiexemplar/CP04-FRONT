export function ExerciseList() {
  const exercises = [
    { 
      id: 1, 
      name: 'Flexão de braço', 
      reps: '3 séries de 12 repetições',
      type: 'Força',
      intensity: 4,
    },
    { 
      id: 2, 
      name: 'Agachamento livre', 
      reps: '3 séries de 15 repetições',
      type: 'Força',
      intensity: 3,
    },
    { 
      id: 3, 
      name: 'Corrida Leve',
      reps: '30 minutos contínuos',
      type: 'Aeróbico',
      intensity: 2,
    },
  ];

  return (
    <div style={{ border: '1px solid #eee', padding: '0 16px', borderRadius: 8, marginTop: 24 }}>
      <h2>Exercícios do Dia</h2>
      <ul>
        {exercises.map(exercise => (
          <li key={exercise.id} style={{ marginBottom: 16 }}>
            <strong>{exercise.name}</strong> ({exercise.reps})
            <p style={{ margin: '4px 0' }}>Tipo: {exercise.type}</p>
            <p style={{ margin: '4px 0' }}>Intensidade: {exercise.intensity}/5</p>
          </li>
        ))}
      </ul>
    </div>
  );
}