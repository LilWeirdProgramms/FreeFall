from flask import Flask, request, jsonify
from Environment.Chute import Chute
from Environment.ChuteManager import ChuteManager
from solver import Solver
import numpy as np

app = Flask(__name__)

@app.route('/solve', methods=['POST'])
def solve():
    params = request.json
    chute_manager = ChuteManager()
    for chute in params['chutes']:
        chute_manager.addChute(Chute(
            name=chute['name'],
            A_max=chute['A_max'],
            cw=chute['cw'],
            openingHeight=chute['openingHeight'],
            cutHeght=chute['cutHeight'],
            openingDelay=chute['openingDelay'],
            openingDuration=chute['openingDuration']
        ))
    rocket_data = params['rocketData']
    rocket_x0 = [rocket_data['pos_x'],rocket_data['pos_y'],rocket_data['vel_x'],rocket_data['vel_y']]
    #plot_data = params['plotData']
    t = np.linspace(0, 170, 10000)
    x = Solver.solve(rocket_x0, t, rocket_data['mass'], chute_manager)
    x = x.transpose().tolist()

    return jsonify({
        'message': 'Hello World',
        'error': None,
        'plotData': x
    })

if __name__ == '__main__':
    app.run()
