<template>
  <div class="form-container">
    <h2>Formulario de Contacto</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="formType">Selecciona una opción:</label>
        <select v-model="selectedForm" id="formType">
          <option value="soporte">Soporte</option>
          <option value="presupuesto">Solicitar un Presupuesto</option>
        </select>
      </div>

      <!-- Campos comunes -->
      <div class="form-group">
        <label for="name">Nombre y Apellido:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div>
      <div class="form-group">
        <label for="phone">Teléfono:</label>
        <input type="tel" id="phone" v-model="formData.phone" required />
      </div>

      <!-- Campos dinámicos -->
      <div v-if="selectedForm === 'soporte'">
        <div class="form-group">
          <label for="barrio">Barrio:</label>
          <input type="text" id="barrio" v-model="formData.barrio" />
        </div>
        <div class="form-group">
          <label for="lote">Lote:</label>
          <input type="text" id="lote" v-model="formData.lote" />
        </div>
      </div>

      <div v-if="selectedForm === 'presupuesto'">
        <div class="form-group">
          <label>Soy:</label>
          <div>
            <input type="checkbox" id="admin" value="administrador" v-model="formData.role" />
            <label for="admin">Administrador</label>
          </div>
          <div>
            <input type="checkbox" id="resident" value="residente" v-model="formData.role" />
            <label for="resident">Residente</label>
          </div>
        </div>
      </div>

      <!-- Campo común -->
      <div class="form-group">
        <label for="comments">Comentarios:</label>
        <textarea id="comments" v-model="formData.comments"></textarea>
      </div>

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedForm: 'soporte', // Valor inicial
      formData: {
        name: '',
        email: '',
        phone: '',
        barrio: '',
        lote: '',
        role: [],
        comments: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      // Manejar el envío del formulario
      console.log('Datos enviados:', this.formData);
    },
  },
};
</script>

<style scoped>
/* Estilos */
.form-container {
  width: 100%;
  max-width: 600px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #9555d0;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

input[type="checkbox"] {
  width: auto;
  margin-right: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #9555d0;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #803bb0;
}

@media (max-width: 768px) {
  .form-container {
    margin-top: 80%;
  }
}
</style>
