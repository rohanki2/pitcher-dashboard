from flask import Flask, jsonify
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
CORS(app)


@app.route("/stats/<pitcherID>", methods=['GET'])
def get_pitcher_stats(pitcherID):
    connection = sqlite3.connect('pitches.db')
    cursor = connection.cursor()
    query = """ SELECT pitch_type,  
    Count(), 
    ROUND(Avg(release_speed),2), 
    ROUND(Avg(horizontal_break),2), 
    ROUND(Avg(induced_vertical_break),2), 
    ROUND(Avg(spin_rate),2), 
    ROUND(Avg(hit_exit_speed), 2),
    ROUND(Avg(hit_launch_angle),2)

    FROM pitches

    WHERE pitcher_id == ? AND pitch_type IS NOT NULL

    GROUP BY pitch_type
    
    """
    cursor.execute(query, (pitcherID,))

    stats = cursor.fetchall()

    connection.close()

    if stats:
        # Create a dictionary with pitch types as keys
        stats_dict = {}
        for pitch in stats: 
            pitch_type = pitch[0]
            stats_dict[pitch_type] = {
                'name': pitch[0],
                'count': pitch[1],
                'velocity': pitch[2],
                'horizontal_break': pitch[3],
                'induced_vertical_break': pitch[4],
                'spin_rate': pitch[5],
                'hit_exit_speed': pitch[6],
                'hit_launch_angle': pitch[7]
            }
            
        return jsonify({
            'data': list(stats_dict.values())
        })
    else:
        return ({
            'error' : 'no pitches found in this query'
        }), 404

    
@app.route("/info", methods=['GET'])
def get_info():
    connection = sqlite3.connect("pitches.db")
    cursor = connection.cursor()

    query = """ SELECT DISTINCT  
    pitcher_id, 
    pitcher_throws, 
    home_team_abbrev, 
    name_last, 
    name_use
        FROM pitches
        INNER JOIN players
	    on pitcher_id = player_id
        WHERE (
        pitcher_id = 657277 
        OR pitcher_id = 668678  
        OR pitcher_id = 543037
        OR pitcher_id = 571945
        OR pitcher_id = 605135
        OR pitcher_id = 664285
        OR pitcher_id = 622491
        OR pitcher_id = 656605
        OR pitcher_id = 641154
        OR pitcher_id = 605400
        OR pitcher_id = 571578
        OR pitcher_id = 680686
        OR pitcher_id = 669022
        OR pitcher_id = 663623
        )
        AND top_bottom LIKE "top"
    
    """   

    cursor.execute(query)

    info = cursor.fetchall()

    connection.close()

    if info:
        info_dict = {}
        for stat in info: 
            stater_id = stat[0]
            info_dict[stater_id] = {
                'id': stat[0],
                'side': stat[1],
                'team': stat[2],
                'name': stat[4] + " " + stat[3],
            }
        return jsonify({
            'total' : list(info_dict.values())
        })
    else:
        return ({
            'error' : 'no pitches found in this query'
        }), 404

if (__name__ == "__main__"):
    app.run(debug=True, port=8080)


