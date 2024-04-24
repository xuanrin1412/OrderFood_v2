import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FormState {
  focusedInput: string;
  showPassword: boolean;
}

const initialState: FormState = {
  focusedInput: "",
  showPassword: false,
};

const formAuthSlice = createSlice({
  name: 'forms',
  initialState,
  reducers: {
    setFocus: (state, action: PayloadAction<string>) => {
      state.focusedInput = action.payload
    },
    setBlur: (state) => {
      state.focusedInput = ""
    },
    togglePassword: (state)=>{
        const elementPassword = document.getElementsByClassName("password");
        if ((elementPassword.length > 0 && (elementPassword[0] as HTMLInputElement).type === "password")) {
            (elementPassword[0] as HTMLInputElement).type = "text"
            state.showPassword = true
        } else {
            (elementPassword[0] as HTMLInputElement).type = "password"
            state.showPassword = false
        }
    }
    
    // toggleTodo: (state, action: PayloadAction<number>) => {
     
    //     const todoIndex = state.todos.findIndex(todo => todo.id === action.payload);
    //     state.todos[todoIndex].completed = !state.todos[todoIndex].completed ;
     
    //   return state;
    // },
    // setFilter: (state, action: PayloadAction<VisibilityFilter>) => {
    //   state.filter = action.payload;
    //   switch (action.payload) {
    //     case VisibilityFilter.SHOW_ACTIVE:
    //       state.filteredTodos = state.todos.filter(todo => !todo.completed);
    //       break;
    //     case VisibilityFilter.SHOW_COMPLETED:
    //       state.filteredTodos = state.todos.filter(todo => todo.completed);
    //       break;
    //     default:
    //       state.filteredTodos = state.todos;
    //       break;
    //   }
    // },
  },
});

export const { setFocus , setBlur ,togglePassword} = formAuthSlice.actions;
export default formAuthSlice.reducer;
